import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Artist } from '../../models/Artist';
import { Album } from '../../models/Album';
import { SpotifyService } from '../../services/spotify.service';

@Component({
    moduleId: module.id,
    selector: 'album',
    templateUrl: 'album.component.html'
})

export class AlbumComponent implements OnInit {
    id: string;
    albums: Album[];

    constructor(private _spotifyService:SpotifyService, private _route:ActivatedRoute){
 
    }

    ngOnInit(){
        console.log(this._route.params);
        this._route.params
            .map(params => params['id'])
            .subscribe((id) => {
                this._spotifyService.getAlbum(id)
                    .subscribe(album => {
                        this.album = album;
                    });
            })
    }
    
}