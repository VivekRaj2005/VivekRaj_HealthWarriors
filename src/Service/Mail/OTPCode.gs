function getMessage(name, otp) {
  var htmlOutput = HtmlService.createHtmlOutputFromFile('Mail'); // Message is the name of the HTML file
  var message = htmlOutput.getContent();
  message = message.replace("$name", name);
  message = message.replace("$otp", otp);
  Logger.log(message);
  return message;
}

function getLog(){
  const e = {
    parameter: {
      email: "vivek23ir09@gmail.com",
      otp: "12345",
      name: "Vivek Raj"
    }
  }
  doPost(e)
}



function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.tryLock(10000);
  Logger.log(e)

      var subject = "Health Warrioirs: Login Authorisation";
      var message = getMessage(e.parameter.name, e.parameter.otp);
      Logger.log(message)
      MailApp.sendEmail({
        to: e.parameter.email,
        subject: subject,htmlBody: message,
      });
        
    Logger.log("OK")
    lock.releaseLock();
  }

