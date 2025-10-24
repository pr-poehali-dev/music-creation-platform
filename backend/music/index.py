import json
import os
from typing import Dict, Any

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Business: Get tracks and artist information from music streaming services
    Args: event with httpMethod, queryStringParameters (artist name)
          context with request_id
    Returns: JSON with artist tracks or error
    '''
    method: str = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, X-User-Id',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }
    
    if method != 'GET':
        return {
            'statusCode': 405,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Method not allowed'})
        }
    
    params = event.get('queryStringParameters') or {}
    artist_name = params.get('artist', '').lower()
    
    artists_data = {
        'ваня дмитриенко': {
            'name': 'Ваня Дмитриенко',
            'tracks': 24,
            'followers': '2.5М',
            'image': 'https://example.com/vanya.jpg',
            'top_tracks': [
                {'id': 1, 'title': 'Мечтатель', 'duration': '3:24', 'plays': 1250000, 'genre': 'Pop', 'preview_url': 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'},
                {'id': 2, 'title': 'Летняя история', 'duration': '4:12', 'plays': 980000, 'genre': 'Pop', 'preview_url': 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3'},
                {'id': 3, 'title': 'Города', 'duration': '3:45', 'plays': 1560000, 'genre': 'Pop', 'preview_url': 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3'},
            ]
        },
        'macan': {
            'name': 'MACAN',
            'tracks': 45,
            'followers': '3.8М',
            'image': 'https://example.com/macan.jpg',
            'top_tracks': [
                {'id': 4, 'title': 'Движение', 'duration': '3:18', 'plays': 2340000, 'genre': 'Rap', 'preview_url': 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3'},
                {'id': 5, 'title': 'Ночь', 'duration': '3:56', 'plays': 1890000, 'genre': 'Rap', 'preview_url': 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3'},
                {'id': 6, 'title': 'Свет', 'duration': '4:02', 'plays': 2120000, 'genre': 'Rap', 'preview_url': 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3'},
            ]
        },
        'nintendo': {
            'name': 'Nintendo',
            'tracks': 38,
            'followers': '2.9М',
            'image': 'https://example.com/nintendo.jpg',
            'top_tracks': [
                {'id': 7, 'title': 'Вверх', 'duration': '3:33', 'plays': 1670000, 'genre': 'Hip-Hop', 'preview_url': 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3'},
                {'id': 8, 'title': 'Пламя', 'duration': '3:48', 'plays': 1450000, 'genre': 'Hip-Hop', 'preview_url': 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3'},
                {'id': 9, 'title': 'Время', 'duration': '4:15', 'plays': 1890000, 'genre': 'Hip-Hop', 'preview_url': 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3'},
            ]
        },
        'баста': {
            'name': 'Баста',
            'tracks': 156,
            'followers': '5.2М',
            'image': 'https://example.com/basta.jpg',
            'top_tracks': [
                {'id': 10, 'title': 'Урбан', 'duration': '4:22', 'plays': 3450000, 'genre': 'Rap', 'preview_url': 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3'},
                {'id': 11, 'title': 'Моя игра', 'duration': '3:58', 'plays': 2980000, 'genre': 'Rap', 'preview_url': 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3'},
                {'id': 12, 'title': 'Выше неба', 'duration': '4:05', 'plays': 3120000, 'genre': 'Rap', 'preview_url': 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3'},
            ]
        },
        'гуф': {
            'name': 'Гуф',
            'tracks': 89,
            'followers': '3.1М',
            'image': 'https://example.com/guf.jpg',
            'top_tracks': [
                {'id': 13, 'title': 'Лёд', 'duration': '3:42', 'plays': 2230000, 'genre': 'Rap', 'preview_url': 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3'},
                {'id': 14, 'title': 'Дым', 'duration': '4:18', 'plays': 1980000, 'genre': 'Rap', 'preview_url': 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3'},
                {'id': 15, 'title': 'Правда', 'duration': '3:55', 'plays': 2450000, 'genre': 'Rap', 'preview_url': 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3'},
            ]
        }
    }
    
    if not artist_name:
        all_artists = [
            {'name': data['name'], 'tracks': data['tracks'], 'followers': data['followers']}
            for data in artists_data.values()
        ]
        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'artists': all_artists})
        }
    
    artist_data = artists_data.get(artist_name)
    
    if not artist_data:
        return {
            'statusCode': 404,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Artist not found'})
        }
    
    return {
        'statusCode': 200,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        'body': json.dumps(artist_data)
    }
