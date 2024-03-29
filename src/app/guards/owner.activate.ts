// import { Injectable } from "@angular/core";
// import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
// import { Observable } from "rxjs";
// import { UserService } from "../modules/user/user.service";
// import { RecipeService } from "../modules/recipe/recipe.service";
// import { Recipe } from "../types/recipe";

// @Injectable({ providedIn: "root" })
// export class OwnerActivate implements CanActivate {
//     constructor(private userService: UserService, private recipeService: RecipeService, private router: Router) { }

//     // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
//     //     const id: string = route.params['id'];
//     //     let recipeOwnerId: string;

//     //     // TODO: в юзър сървиса да направя един метод за цхекване на юзъра
//     //     // + в рецептите сървиса да направя гетер или метод и тук просто да сравня двата резултата
//     //     // ++ или да върна осървъбъл от някой от методите.
//     //     // даже може да си добавям моите рецепти в юзъра в бек4ап

//     //     // // this.recipeService.getRecipe(id)
//     //     // //     .subscribe((data) => { recipeOwnerId = data.ownerId.objectId });

//     //     // this.recipeService.getRecipe(id)
//     //     //     .subscribe((data) => {
//     //     //         data.ownerId
//     //     //     });

//     //     // const userId: string = this.userService.user?.objectId || '';
//     //     // const isOwner: boolean = userId == recipeOwnerId;

//     //     // if (isOwner) {
//     //     //     return true;
//     //     // } else {
//     //     //     this.router.navigate(['/auth/login']);
//     //     //     return false;
//     //     // }
//     // }
// }