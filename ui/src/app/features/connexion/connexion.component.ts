import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthenticationService } from "src/app/core/authentication/authentication.service";
import { ToastrService } from "ngx-toastr";
import { Store } from "@ngxs/store";
import { GetAllWishesArticles } from "src/app/core/store/store.module/wishe/wish.action";

@Component({
  selector: "app-connexion",
  templateUrl: "./connexion.component.html",
  styleUrls: ["./connexion.component.css"]
})
export class ConnexionComponent implements OnInit {
  model: any = {};
  loading = false;

  public myForm: FormGroup;

  constructor(
    private router: Router,
    private authService: AuthenticationService,
    private store: Store,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.myForm = new FormGroup({
      username: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required)
    });
  }

  onSubmit() {
    this.loading = true;
    this.authService.login(this.model.username, this.model.password).subscribe(
      () => {
        this.store.dispatch(new GetAllWishesArticles());
        this.router.navigate(["accueil"]);
      },
      error => {
        this.loading = false;
        this.toastr.error(
          "Erreur",
          "Mot de passe ou identifiant incorrect",
          {}
        );
      }
    );
  }
}
