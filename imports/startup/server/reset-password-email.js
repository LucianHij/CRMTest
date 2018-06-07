import { Accounts } from 'meteor/accounts-base';


Accounts.emailTemplates.siteName = 'Meteor Guide Todos Example';
Accounts.emailTemplates.from = 'Meteor Todos Accounts <accounts@example.com>';

Accounts.emailTemplates.resetPassword = {
  subject() {
    return 'Reset your password on Meteor Todos';
  },
  text(user, url) {
    return `Hello!

Click the link below to reset your password on Meteor Todos.

${url}

If you didn't request this email, please ignore it.

Thanks,
The Meteor Todos team
`;
  },
};
