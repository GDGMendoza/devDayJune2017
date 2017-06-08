import { Input, Component, OnInit, ViewChild } from '@angular/core';
import { Post } from './../../shared/post/post.model';

@Component({
  selector: 'gdg-mini-post',
  templateUrl: './mini-post.component.html',
  styleUrls: ['./mini-post.component.sass']
})
export class MiniPostComponent implements OnInit {
    @Input() post: Post;

    constructor() {}

    ngOnInit() {
    }

}
