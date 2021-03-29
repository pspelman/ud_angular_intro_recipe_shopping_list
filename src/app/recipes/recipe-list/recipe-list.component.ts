import { Component, OnInit } from '@angular/core'
import {Recipe} from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('risoto', 'good rice and stuff', 'https://img.estadao.com.br/fotos/crop/1200x1200/resources/jpg/3/8/1574805378183.jpg')
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
