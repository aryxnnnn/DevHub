const { SendEmailCommand } = require("@aws-sdk/client-ses");
const { sesClient } = require("./sesClient");

const createSendEmailCommand = (toAddress, fromAddress , subject , body) => {
  return new SendEmailCommand({
    Destination: {

      CcAddresses: [
      ],
      ToAddresses: [
        toAddress,
      ],
    },
    Message: {

      Body: {
        Html: {
          Charset: "UTF-8",
          Data: `<h1>${body}</h1>`,
        },
        Text: {
          Charset: "UTF-8",
          Data: "TEXT_FORMAT_BODY",
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: subject,
      },
    },
    Source: fromAddress,
    ReplyToAddresses: [
      /* more items */
    ],
  });
};

const run = async (subject , body) => {
  const sendEmailCommand = createSendEmailCommand(
    "aryankaushik38108@gmail.com",
    "aryankaushik38018@gmail.com" , 
    // "notifications@devhub4u.dpdns.org",
    subject , 
    body
  );

  try {
    return await sesClient.send(sendEmailCommand);
  } catch (caught) {
    if (caught instanceof Error && caught.name === "MessageRejected") { 
      const messageRejectedError = caught;
      return messageRejectedError;
    }
    throw caught;
  }
};

// const run = async (subject, body) => {

//   const sendEmailCommand = createSendEmailCommand(
//     "aryankaushik38108@gmail.com",
//     "notifications@devhub4u.dpdns.org",
//     subject,
//     body
//   );

//   try {
//     const response = await sesClient.send(sendEmailCommand);
//     console.log("SES SUCCESS:", response);
//     return response;
//   } catch (error) {
//     console.error("SES ERROR:", error);
//     throw error;
//   }
// };

module.exports = {run}