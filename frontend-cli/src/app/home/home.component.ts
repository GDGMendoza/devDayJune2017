import { Component, OnInit } from '@angular/core';
import {Post} from './../shared/post/post.model';

@Component({
  selector: 'gdg-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
    posts: Post[];
    title: string;

    constructor() {
        this.title = 'GDG DevDay - GDG Mendoza';
        this.posts = [
            {
                _id: 'id1',
                id: 'id1',
                categoryId: 'idcategoria',
                tagId: 'idtag',
                postStatusId: 'idstatusdelpost',
                text: 'Bonjour gdg devDay',
                dateCreated: Date.now().toString(),
                dateUpdated: '',
                createdByUserId: 'me'
            },
            {
                _id: 'id2',
                id: 'id2',
                categoryId: 'idcategoria',
                tagId: 'idtag',
                postStatusId: 'idstatusdelpost',
                text: 'Bonjour gdg devDay',
                dateCreated: Date.now().toString(),
                dateUpdated: '',
                createdByUserId: 'me'
            }
        ];
        console.log('posts', this.posts);
    }

  ngOnInit() {
  }

}
