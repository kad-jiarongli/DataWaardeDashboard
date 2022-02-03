import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
  
})
export class CommentComponent implements OnInit {
  commentText:string;

  constructor() {
    this.commentText="<section lang='nl'> <h3>Weetjes voor gebruik</h3> <p>Een object kan meerdere adressen hebben (nevenadressen). </p> <p>Een object dat gesloopt is blijft onderdeel van de registratie. </p> <p>Niet elk gebouw heeft een adres, bijvoorbeeld vrijstaande schuren bij een woning. </p> <p>Een verblijfsobject kan meerdere panden liggen. </p> </section>"
   }

  ngOnInit(): void {
  }

}
