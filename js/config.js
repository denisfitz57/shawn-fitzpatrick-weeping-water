// Site settings you may want to change.
window.SITE_CONFIG = {
  // Reader memories ("Add a memory" buttons) go to a Google Form you own. Readers need
  // no account. Submissions land in the form's response spreadsheet, and only rows you
  // mark "yes" in the Approved column appear on the site. Setup steps are in README.md.
  //
  // formAction:   the form's address, ending in /formResponse
  // fields:       the entry.NNNN number of each question (from the form's "Get pre-filled link")
  // publishedCsv: the "Publish to web" CSV link of the sheet tab that lists approved memories
  // Leave formAction empty and the buttons explain that memories are coming soon.
  memories: {
    formAction: "https://docs.google.com/forms/d/e/1FAIpQLSdIp3RiXsLmxUTyNiBvvI-U1siQwiHHVNxXCWcCfO0c17dakA/formResponse",
    fields: { chapter: "entry.2116830765", name: "entry.1345663035", memory: "entry.1695565081", email: "entry.812732513" },
    publishedCsv: "https://docs.google.com/spreadsheets/d/e/2PACX-1vThzSHK200O87sTLepdF98WrwgaV0IQLCf-uqaPe3OL9Dc1B-uFDtXEq9MMW-AIDtACP7ZhVS_VDy0i/pub?gid=1243012161&single=true&output=csv"
  },

  // Optional: where readers can send scans, photos or corrections privately.
  contactEmail: ""
};
