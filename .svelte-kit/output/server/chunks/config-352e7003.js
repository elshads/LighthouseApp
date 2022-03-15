const appname = "Lighthouse";
const appurl = "http://192.168.0.211:8080";
const companyname = "FH Sudwestfalen";
const companypage = "https://www.fh-swf.de/en/";
const accepteddomain = "fh-swf.de";
const connection = "postgres://postgres:postgres@localhost:5432/lighthousedb";
const mailsettings = {
  host: "mail.privateemail.com",
  port: 587,
  secure: false,
  auth: {
    user: "app@apexes.one",
    pass: "ApexU$er2022"
  }
};
var config = {
  appname,
  appurl,
  companyname,
  companypage,
  accepteddomain,
  connection,
  mailsettings
};
export { config as c };
