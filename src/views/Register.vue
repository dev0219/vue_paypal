<template id="Register">
    <section class="row flexbox-container">
        <div class="col-12 d-flex align-items-center justify-content-center">
            <div class="col-lg-4 col-md-8 col-10 box-shadow-2 p-0">
                <div class="card border-grey border-lighten-3 px-2 py-2 m-0">
                    <div class="card-content">
                        <div class="card-body">
                            <div class="options" v-if="!selectedRegistrationMethod">
                                <div class="form-group row">
                                    <div class="col-12">
                                        <button type="button" class="btn btn-default btn-block" @click="onGoogleRegisterBtnClick()">
                                            <svg class="socialIcon" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M19.6 10.23c0-.82-.1-1.42-.25-2.05H10v3.72h5.5c-.15.96-.74 2.31-2.04 3.22v2.45h3.16c1.89-1.73 2.98-4.3 2.98-7.34z" fill="#4285F4"/>
                                                <path d="M13.46 15.13c-.83.59-1.96 1-3.46 1-2.64 0-4.88-1.74-5.68-4.15H1.07v2.52C2.72 17.75 6.09 20 10 20c2.7 0 4.96-.89 6.62-2.42l-3.16-2.45z" fill="#34A853"/>
                                                <path d="M3.99 10c0-.69.12-1.35.32-1.97V5.51H1.07A9.973 9.973 0 0 0 0 10c0 1.61.39 3.14 1.07 4.49l3.24-2.52c-.2-.62-.32-1.28-.32-1.97z" fill="#FBBC05"/>
                                                <path d="M10 3.88c1.88 0 3.13.81 3.85 1.48l2.84-2.76C14.96.99 12.7 0 10 0 6.09 0 2.72 2.25 1.07 5.51l3.24 2.52C5.12 5.62 7.36 3.88 10 3.88z" fill="#EA4335"/>
                                            </svg>
                                            Sign up with Google
                                        </button>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <div class="col-12">
                                        <button type="button" class="btn btn-default btn-block" @click="onFacebookRegisterBtnClick()">
                                            <svg class="socialIcon" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M18.007 19c.55 0 .993-.444.993-.993V1.993c0-.55-.444-.993-.993-.993H1.993C1.443 1 1 1.444 1 1.993v16.014c0 .55.444.993.993.993h16.014zm-4.587 0v-6.97h2.34l.35-2.717h-2.69V7.578c0-.786.218-1.322 1.346-1.322h1.438v-2.43c-.25-.034-1.102-.108-2.096-.108-2.073 0-3.494 1.267-3.494 3.59v2.005H8.268v2.717h2.346V19h2.806z" fill="#3B5998" fill-rule="evenodd"/>
                                            </svg>
                                            Sign up with Facebook
                                        </button>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <div class="col-12">
                                        <button type="button" class="btn btn-default btn-block" @click="onEmailRegisterBtnClick()">
                                            <svg class="socialIcon" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 5.006C1 3.898 1.893 3 2.995 3h14.01C18.107 3 19 3.897 19 5.006v9.988C19 16.102 18.107 17 17.005 17H2.995C1.893 17 1 16.103 1 14.994V5.006zM3 5l7 4 7-4v2l-7 4-7-4V5z" fill-opacity=".54" fill="#000" fill-rule="evenodd"/>
                                            </svg>
                                            Sign up with Email
                                        </button>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <div class="col-12">
                                        <button type="button" class="btn btn-default btn-block" @click="onPhoneRegisterBtnClick()">
                                            <svg class="socialIcon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48" fill="#757575">
                                                <path d="M0 0h48v48H0z" fill="none"/>
                                                <path d="M13.25 21.59a30.12 30.12 0 0 0 13.18 13.17l4.4-4.41c.55-.55 1.34-.71 2.03-.49C35.1 30.6 37.51 31 40 31c1.11 0 2 .89 2 2v7c0 1.11-.89 2-2 2C21.22 42 6 26.78 6 8a2 2 0 0 1 2-2h7c1.11 0 2 .89 2 2 0 2.49.4 4.9 1.14 7.14.22.69.06 1.48-.49 2.03l-4.4 4.42z"/>
                                            </svg>
                                            Sign up with Phone
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <!-- Form for email start -->
                            <form class="form-horizontal form-simple" @submit="onEmailFormSubmit($event)" v-if="selectedRegistrationMethod === 'email'">
                                <div class="alert alert-danger text-center" v-if="form.errorMsg">
                                    {{ form.errorMsg }}
                                </div>
                                <fieldset class="form-group position-relative has-icon-left mb-1">
                                    <input type="email" class="form-control form-control-lg input-lg" v-model="formData.email" id="user-email" placeholder="Your Email Address" required>
                                    <div class="form-control-position">
                                        <i class="la la-envelope"></i>
                                    </div>
                                </fieldset>
                                <fieldset class="form-group position-relative has-icon-left">
                                    <input type="password" class="form-control form-control-lg input-lg" v-model="formData.password" id="user-password" placeholder="Enter Password" required>
                                    <div class="form-control-position">
                                        <i class="la la-key"></i>
                                    </div>
                                </fieldset>
                                <div class="form-group">
                                    <button type="submit" class="btn btn-info btn-lg btn-block" :disabled="form.submitting">
                                        <i class="ft-unlock"></i>
                                        {{ form.submitting ? "Please wait..." : "Register" }}
                                    </button>
                                </div>
                                <div class="form-group">
                                    <p class="text-center">OR</p>
                                </div>
                                <p class="text-center">Choose another <a href="#" @click="onChangeRegisterMethodClick($event)">signup</a> method</p>
                            </form>
                            <!-- Form for email end -->

                            <!-- Form for phone number start -->
                            <form class="form-horizontal form-simple" :class="{'d-none' : selectedRegistrationMethod !== 'phone' || confirmationPhoneCodeObject}">
                                <div class="alert alert-danger text-center" v-if="form.errorMsg">
                                    {{ form.errorMsg }}
                                </div>
                                <fieldset class="form-group position-relative has-icon-left mb-1" v-if="selectedRegistrationMethod === 'phone'">
                                    <VuePhoneNumberInput v-model="formData.phone" ref="phoneNumberInput" @update="onPhoneNumberInput($event)" />
                                </fieldset>
                                <div class="form-group">
                                    <button type="submit" class="btn btn-info btn-lg btn-block" name="registerBtn" id="phoneRegisterBtn" :disabled="form.submitting">
                                        <i class="ft-unlock"></i>
                                        {{ form.submitting ? "Please wait..." : "Register" }}
                                    </button>
                                </div>
                                <div class="form-group">
                                    <p class="text-center">OR</p>
                                </div>
                                <p class="text-center">Choose another <a href="#" @click="onChangeRegisterMethodClick($event)">signup</a> method</p>
                            </form>
                            <!-- Form for phone number end -->

                            <!-- Form for phone number confirmation code -->
                            <form v-if="confirmationPhoneCodeObject" @submit="onConfirmationCodeFormSubmit($event)">
                                <div class="alert alert-danger text-center" v-if="form.errorMsg">
                                    {{ form.errorMsg }}
                                </div>
                                <fieldset class="form-group position-relative has-icon-left mb-1">
                                    <input type="phone" class="form-control form-control-lg input-lg" v-model="formData.confirmationCode" placeholder="Confirmation code" required>
                                    <div class="form-control-position">
                                        <i class="la la-phone"></i>
                                    </div>
                                </fieldset>
                                <div class="form-group">
                                    <button type="submit" class="btn btn-info btn-lg btn-block" :disabled="form.submitting">
                                        <i class="ft-unlock"></i>
                                        {{ form.submitting ? "Please wait..." : "Confirm" }}
                                    </button>
                                </div>
                            </form>
                            <!-- From for phone number confirmation end -->
                        </div>
                        <p class="text-center">Already have an account ? <router-link to="/" class="card-link">Login</router-link></p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import PageSettings from "@/store/config/globals/PageThemeSettings"
    import { firebaseAuth } from "@/firebase";
    import * as firebase from "firebase";
    import axios from "@/store/config/api/axios";
    import VuePhoneNumberInput from 'vue-phone-number-input';
    import 'vue-phone-number-input/dist/vue-phone-number-input.css';
    

    export default
    {
        name: "Register",
        data()
        {
            return {
                googleAuthProvider          : new firebase.auth.GoogleAuthProvider(),
                facebookAuthProvider        : new firebase.auth.FacebookAuthProvider(),
                recaptchaVerifier           : null,
                selectedRegistrationMethod  : null,
                confirmationPhoneCodeObject : null,
                recptchaId                  : null,
                formData : {
                    email    : "",
                    phone    : "",
                    password : "",
                    confirmationCode : ""
                },
                form : {
                    submitting : false,
                    errorMsg   : "",
                    errors     : {
                        email    : "",
                        phone    : "",
                        password : "",
                        confirmationCode : ""
                    }
                }
            }
        },
        mounted()
        {
            this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier("phoneRegisterBtn", {
                size     : "invisible",
                callback : (response) =>
                {
                    this.signUpWithPhone();
                }
            });

            this.recaptchaVerifier.render().then((widgetId) =>
            {
                this.recptchaId = widgetId;
            })
            .catch(error =>
            {
            });
        },
        methods : {
            onPhoneNumberInput : function(Data)
            {
                console.log(Data);
            },
            onChangeRegisterMethodClick(e)
            {
                e.preventDefault();
                this.selectedRegistrationMethod = null;
            },

            onGoogleRegisterBtnClick()
            {
                firebaseAuth.signInWithPopup(this.googleAuthProvider).then((result) =>
                {
                    if (result.additionalUserInfo.isNewUser)
                    {
                        const params = {
                            name  : result.additionalUserInfo.profile.name,
                            email : result.additionalUserInfo.profile.email,
                        };

                        axios.post("register", params).then(response =>
                        {
                            console.log(response);
                            localStorage.setItem("apiToken", response.data.token);
                        })
                        .catch(error =>
                        {
                            console.log(error);
                        });
                    }
                })
                .catch((error) =>
                {
                    console.log(error);
                });
            },

            onFacebookRegisterBtnClick()
            {
                firebaseAuth.signInWithPopup(this.facebookAuthProvider).then((result) =>
                {
                    console.log(result);
                })
                .catch((error) =>
                {
                    console.log(error);
                });
            },

            onEmailRegisterBtnClick()
            {
                this.formData.email              = "";
                this.formData.password           = "";
                this.form.errorMsg               = "";
                this.form.errors.email           = "";
                this.form.errors.password        = "";
                this.confirmationPhoneCodeObject = null;
                this.selectedRegistrationMethod  = "email";
            },

            onPhoneRegisterBtnClick()
            {
                this.formData.phone              = "";
                this.form.errorMsg               = "";
                this.form.errors.phone           = "";
                this.confirmationPhoneCodeObject = null;
                this.selectedRegistrationMethod  = "phone";
            },

            onEmailFormSubmit(e)
            {
                e.preventDefault();

                let hasErrors = false;

                if (!this.formData.email.trim())
                {
                    this.form.errors.email = "Please enter your email";
                    hasErrors = true;
                }
                else
                {
                    this.form.errors.email = "";
                }

                if (!this.formData.password.trim())
                {
                    this.form.errors.password = "Please enter your password";
                    hasErrors = true;
                }
                else
                {
                    this.form.errors.password = "";
                }

                if (hasErrors)
                {
                    return;
                }

                this.form.submitting = true;

                firebaseAuth.createUserWithEmailAndPassword(this.formData.email, this.formData.password).then(response =>
                {
                    const params = {
                        email    : this.formData.email,
                        password : this.formData.password,
                    };

                    axios.post("register", params).then(response =>
                    {
                        localStorage.setItem("apiToken", response.data.token);
                    });
                })
                .catch(error =>
                {
                    if (error.code === "auth/invalid-email")
                    {
                        this.form.errorMsg = "Please enter a valid email";
                    }
                    else if (error.code === "auth/weak-password" || error.code === "auth/email-already-in-use")
                    {
                        this.form.errorMsg = error.message;
                    }
                    else
                    {
                        this.form.errorMsg = error.message;
                    }

                    console.log(error);
                })
                .then(() =>
                {
                    this.form.submitting = false;
                });
            },
            signUpWithPhone()
            {
                this.form.submitting = true;
                this.form.errorMsg   = "";

                console.log(this.$refs.phoneNumberInput);

                firebaseAuth.signInWithPhoneNumber(this.formData.phone, this.recaptchaVerifier).then(confirmationResult =>
                {
                    this.confirmationPhoneCodeObject = confirmationResult;
                })
                .catch(error =>
                {
                    console.log("Got error", error);

                    if (error.code === "auth/invalid-phone-number")
                    {
                        this.form.errorMsg = "Please enter a valid phone number";
                    }
                    else
                    {
                        this.form.errorMsg = error.message;
                    }

                    this.recaptchaVerifier.reset(this.recptchaId);
                })
                .then(() =>
                {
                    this.form.submitting = false;
                });
            },
            onConfirmationCodeFormSubmit(event)
            {
                event.preventDefault();

                this.form.errorMsg = "";

                if (!this.formData.confirmationCode.trim())
                {
                    this.form.errorMsg = "Please enter a confirmation code";
                    return;
                }
                else
                {
                    this.form.errorMsg = "";
                }

                this.form.submitting = true;

                this.confirmationPhoneCodeObject.confirm(this.formData.confirmationCode).then(response =>
                {
                    const params = {
                        phoneNumber : this.formData.phone,
                    };

                    axios.post("register", params).then(response =>
                    {
                        localStorage.setItem("apiToken", response.data.token);
                    });
                })
                .catch(error =>
                {
                    if (error.code === "auth/invalid-verification-code")
                    {
                        this.form.errorMsg = "Confirmation code is invalid.";
                        this.confirmationPhoneCodeObject = null;
                        this.formData.confirmationCode = "";
                    }
                })
                .then(() =>
                {
                    this.form.submitting = false;
                });
            }
        },
        components : {
            VuePhoneNumberInput
        }
    }

</script>