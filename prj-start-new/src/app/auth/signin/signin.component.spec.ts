import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { SigninComponent } from "./signin.component";
import { AuthModule } from "../auth.module";
import { AuthRoutingModule } from "../auth-routing.module";
import { AuthService } from "../auth.service";

describe("SigninComponent", () => {
  let component: SigninComponent;
  let fixture: ComponentFixture<SigninComponent>;
  let service: AuthService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AuthModule, AuthRoutingModule, RouterTestingModule],
      providers: [AuthService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninComponent);
    component = fixture.componentInstance;
    service = TestBed.get(AuthService);
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
