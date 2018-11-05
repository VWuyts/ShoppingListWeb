import { Injectable } from '@angular/core';
import { Reference } from '../basic-classes/reference';

@Injectable({
  providedIn: 'root'
})
export class ReferencesService {
  references: Reference[] = [
    // {id: '', author: '', title: '', year: 2018, organisation: '', url: '', urlDate: new Date('')},
    {id: 'Angular_2018', author: 'Angular', title: 'What is Angular?', year: 2018, organisation: 'Google',
      url: 'https://angular.io/docs', urlDate: new Date('2018-05-02')},
    {id: 'W3SchoolsBootstrap_2018', author: 'W3Schools.com', title: 'Bootstrap 4 Tutorial', year: 2018, organisation: '',
      url: 'https://www.w3schools.com/bootstrap4/default.asp', urlDate: new Date('2018-05-02')},
    {id: 'AngularPipes_2018', author: 'Angular',
      title: 'Pipes - Appendix: No FilterPipe or OrderByPipe', year: 2018, organisation: 'Google',
      url: 'https://angular.io/guide/pipes#appendix-no-filterpipe-or-orderbypipe', urlDate: new Date('2018-05-02')},
    {id: 'Ahmad_2016', author: 'Faheel Ahmad',
      title: 'Bootstrap 4 - Responsive cards in card-columns', year: 2016, organisation: 'Stack Overflow',
      url: 'https://stackoverflow.com/questions/34140793/bootstrap-4-responsive-cards-in-card-columns', urlDate: new Date('2018-05-02')},
    {id: 'GoogleMaterialDesign_2018', author: 'Google', title: 'Material Design - Color palette', year: 2018,
        organisation: '', url: 'https://material.io/guidelines/style/color.html#color-color-tool', urlDate: new Date('2018-05-02')},
    {id: 'SmugglerFlyn_2014', author: 'smugglerFlyn', title: 'Best way to override Bootstrap CSS', year: 2014,
      organisation: 'Stack Overflow', url: 'https://stackoverflow.com/questions/20721248/best-way-to-override-bootstrap-css',
      urlDate: new Date('2018-05-02')},
    {id: 'FontAwesome_2018', author: 'Fonticons, Inc', title: 'Font Awesome Icons', year: 2018, organisation: '',
      url: 'https://fontawesome.com/icons', urlDate: new Date('2018-11-04')},
    {id: 'ProdrawGraphics_2018', author: 'ProDraw Graphics', title: 'Free Online *.ICO icon Generator', year: 2018,
      organisation: '', url: 'http://www.prodraw.net/favicon', urlDate: new Date('2018-06-02')},
    {id: 'Mahval_2017', author: 'mahval', title: 'Get value from select option in Angular 4', year: 2017,
      organisation: 'Stack Overflow', url: 'https://stackoverflow.com/questions/46447459/get-value-from-select-option-in-angular-4',
      urlDate: new Date('2018-05-02')},
    {id: 'AngularStyleGuide_2018', author: 'Angular', title: 'Style Guide', year: 2018, organisation: 'Google',
      url: 'https://angular.io/guide/styleguide', urlDate: new Date('2018-10-23')},
    {id: 'AngularNgGenerate_2018', author: 'Angular', title: 'ng generate', year: 2018, organisation: 'Google',
      url: 'https://angular.io/cli/generate', urlDate: new Date('2018-10-23')},
    {id: 'AngularFormValidation_2018', author: 'Angular', title: 'Form Validation', year: 2018, organisation: 'Google',
      url: 'https://angular.io/guide/form-validation', urlDate: new Date('2018-11-03')},
    {id: 'Srinivas_2014', author: 'Srinivas, Wiktor Stribiżew',
      // tslint:disable-next-line:max-line-length
      title: 'Regex for password must contain at least eight characters, at least one number and both lower and uppercase letters and special characters',
      year: 2014, organisation: 'Stack Overflow',
      url: 'https://stackoverflow.com/questions/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a',
      urlDate: new Date('2018-11-04')},
    {id: 'RxJS_from_2018', author: 'RxJS', title: 'RxJS Reference: from', year: 2018, organisation: 'RxJS',
      url: 'https://rxjs-dev.firebaseapp.com/api/index/function/from', urlDate: new Date('2018-11-04')},
    {id: 'AngularRxJS_2018', author: 'Angular', title: 'The RxJS library', year: 2018, organisation: 'Google',
      url: 'https://angular.io/guide/rx-library', urlDate: new Date('2018-11-04')},
  ];

  constructor() { }
}
