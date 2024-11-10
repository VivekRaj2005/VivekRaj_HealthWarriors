function getMessage(name, drname, aadhar) {
  var htmlOutput = HtmlService.createHtmlOutputFromFile('Mail'); // Message is the name of the HTML file
  var message = htmlOutput.getContent();
  message = message.replace("$name", name);
  message = message.replace("$drname", drname);
  message = message.replace("$aadhar", aadhar);
  Logger.log(message);
  return message;
}

function getLog(){
  const e = {
    parameter: {
      email: "vivek23ir09@gmail.com",
      doctor: "Dr.Vivek Raj",
      drEmail: "23110362@iitgn.ac.in",
      aadhar: "23110362",
      name: "Vivek Raj"
    }
  }
  doPost(e)
}



function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.tryLock(10000);
  Logger.log(e)

      var subject = "Health Warrioirs: Appointement Booking Confirmed";
      var message = getMessage(e.parameter.name, e.parameter.doctor,e.parameter.aadhar );
      Logger.log(message)
      MailApp.sendEmail({
        to: e.parameter.email,
        subject: subject,htmlBody: message,
      });
       MailApp.sendEmail({
        to: e.parameter.drEmail,
        subject: subject,htmlBody: message,
      });
        
    Logger.log("OK")
    lock.releaseLock();
  }

