import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { Post } from '../../models/post.model'; 

@Component({
  selector: 'app-list-posts',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.css']
})
export class ListPostsComponent {
  posts?: Post[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.initData();
  }

  //method called initData
  initData(): void {
    this.http.get<Post[]>('https://localhost:7042/api/Post')
      .subscribe({
        next: (data: Post[]) => {
          this.posts = data;
          console.log(this.posts);
        },
        error: (err) => {
          console.error('Error fetching posts', err);
        }
      });
  }
}
