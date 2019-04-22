import {
  Component,
  OnInit,
  OnChanges,
  Input,
  ViewEncapsulation,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef
} from "@angular/core";

@Component({
  selector: "app-server-element",
  templateUrl: "./server-element.component.html",
  styleUrls: ["./server-element.component.css"],
  encapsulation: ViewEncapsulation.Emulated
  //emulated is default, but you can also choose None or Native. when it is None, it will make the
  // styling of the file.css global
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {
  @Input("srvElement") element: { type: string; name: string; content: string };
  //binding through alias srvElement
  @Input() name: string;
  @ViewChild("heading") header: ElementRef;
  constructor() {
    console.log("constructor called");
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnchanges: ", changes);
  }
  ngOnInit() {
    console.log("ngOnInit called");
    console.log("text content" + this.header.nativeElement.textContent);
  }
  ngDoCheck() {
    console.log("ngDoCheck called");
  }
  ngAfterContentInit() {
    console.log("ngAfterContentInit called");
  }
  ngAfterContentChecked() {
    console.log("ngAfterContentChecked called");
  }
  ngAfterViewChecked() {
    console.log("ngAfterViewChecked called");
  }
  ngAfterViewInit() {
    console.log("ngAfterViewInit called");
    console.log("text content" + this.header.nativeElement.textContent);
  }
  ngOnDestroy() {
    console.log("ngOnDestroy called");
  }
}
