import 'jquery/dist/jquery.min'
import 'bootstrap/dist/js/bootstrap'
// import 'bootstrap/dist/js/bootstrap.bundle.min.js'
// import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'

import {Component} from '@angular/core'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent {
  collapsed = true
}
