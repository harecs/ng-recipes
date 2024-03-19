import { ValidatorFn } from "@angular/forms";

export function emailValidator(): ValidatorFn {
    const regExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,24}$/g

    return (control) => {
        const isEmailInvalid = control.value === '' || regExp.test(control.value);
        return isEmailInvalid ? null : { emailValidator: true };
    }
}