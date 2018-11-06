export class AppConfig {
  private config = {
    apiKey: 'AIzaSyD0bsPmgl0cpazfGSHYR1V2LvqK-U5N47Y',
    authDomain: 'shopping-list-web-vw.firebaseapp.com',
    databaseURL: 'https://shopping-list-web-vw.firebaseio.com/',
    projectID: 'shopping-list-web-vw',
    storageBucket: 'shopping-list-web-vw.appspot.com',
  };
  private adminEmail = 'admin@admin.be';

  getAdminEmail(): string {
    return this.adminEmail;
  }

  getConfig() {
    return this.config;
  }
}
