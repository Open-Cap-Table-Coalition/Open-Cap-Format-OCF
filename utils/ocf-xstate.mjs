import fs from "fs";
import xstate from "xstate";
import { validateOcfDirectory } from "./validate.mjs";

/* 
PROTOTYPE FOR USING XSTATE TO VALIDATE OCF PACKAGES
Edit files in ./samples/Acme-Holdings to change input data to prototype.
Run the prototype validation from the root folder with `node ./utils/ocf-xstate.mjs`.
*/

const { createMachine, interpret } = xstate;

const acme_directory = "./samples/Acme-Holdings";
const acme_manifest = JSON.parse(
  fs.readFileSync("./samples/Acme-Holdings/Manifest.ocf.json", "utf8")
);
const acme_stakeholders = JSON.parse(
  fs.readFileSync("./samples/Acme-Holdings/Stakeholders.ocf.json", "utf8")
);
const acme_stockClasses = JSON.parse(
  fs.readFileSync("./samples/Acme-Holdings/StockClasses.ocf.json", "utf8")
);
const acme_transactions = JSON.parse(
  fs.readFileSync("./samples/Acme-Holdings/Transactions.ocf.json", "utf8")
);

// Validate OCF folder
const validationResult = await validateOcfDirectory(
  acme_directory,
  false,
  false
);

if (validationResult) {
  console.log(`Schema validation passed...`);
  console.log(
    `This OCF bundle has ${acme_transactions.items.length} ${
      acme_transactions.items.length == 1 ? "transaction" : "transactions"
    }.`
  );
} else {
  console.log("Schema validation FAILED!");
}

// Create sorted transactions list

const transaction_types = [
  "TX_STOCK_ISSUANCE",
  "TX_STOCK_TRANSFER",
  "TX_STOCK_CANCELLATION",
  "TX_STOCK_RETRACTION",
  "TX_STOCK_ACCEPTANCE",
  "TX_STOCK_REISSUANCE",
  "TX_STOCK_CONVERSION",
  "TX_STOCK_REPURCHASE",
];
const sorted_transactions = acme_transactions.items.sort(
  (a, b) =>
    a.date.localeCompare(b.date) ||
    transaction_types.indexOf(a.object_type - b.object_type)
);

// Functions for validating each transaction type

const valid_tx_stock_issuance = (context, event) => {
  let valid = false;

  let stakeholder_validity = false;
  acme_stakeholders.items.forEach((ele) => {
    if (ele.id == event.data.stakeholder_id) {
      stakeholder_validity = true;
    }
  });

  let stockClass_validity = false;
  acme_stockClasses.items.forEach((ele) => {
    if (ele.id == event.data.stock_class_id) {
      stockClass_validity = true;
    }
  });

  if (!stockClass_validity) {
    console.log(
      `There is an error with the stock class of ${event.data.security_id}`
    );
  }
  if (!stakeholder_validity) {
    console.log(
      `There is an error with the stakeholder of ${event.data.security_id}`
    );
  }

  if (stockClass_validity && stakeholder_validity) {
    valid = true;
  }

  if (valid) {
    return true;
  } else {
    return false;
  }
};

const valid_tx_stock_transfer = (context, event) => {
  let valid = false;

  context.stockIssuances.forEach((ele) => {
    if (ele.security_id == event.data.security_id) {
      valid = true;
    }
  });

  if (valid) {
    return true;
  } else {
    return false;
  }
};

const valid_tx_stock_cancellation = (context, event) => {
  let valid = false;

  context.stockIssuances.forEach((ele) => {
    if (ele.security_id == event.data.security_id) {
      valid = true;
    }
  });

  if (valid) {
    return true;
  } else {
    return false;
  }
};

const valid_tx_stock_retraction = (context, event) => {
  let valid = false;

  // TBC: validation of tx_stock_retraction

  if (valid) {
    return true;
  } else {
    return false;
  }
};

const valid_tx_stock_acceptance = (context, event) => {
  let valid = false;

  // TBC: validation of tx_stock_acceptance

  if (valid) {
    return true;
  } else {
    return false;
  }
};

const valid_tx_stock_reissuance = (context, event) => {
  let valid = false;

  // TBC: validation of tx_stock_reissuance

  if (valid) {
    return true;
  } else {
    return false;
  }
};

const valid_tx_stock_conversion = (context, event) => {
  let valid = false;

  // TBC: validation of tx_stock_conversion

  if (valid) {
    return true;
  } else {
    return false;
  }
};

const valid_tx_stock_repurchase = (context, event) => {
  let valid = false;

  // TBC: validation of tx_stock_repurchase

  if (valid) {
    return true;
  } else {
    return false;
  }
};

// Set up OCF Xstate machine

const ocfMachine = {
  predictableActionArguments: true,
  id: "OCF-xstate",
  context: { stockIssuances: [] },
  initial: "capTable",
  states: {
    capTable: {
      on: {
        TX_STOCK_ISSUANCE: [
          {
            target: "capTable",
            cond: valid_tx_stock_issuance,
            actions: (context, event) => {
              console.log(`TX_STOCK_ISSUANCE ${event.data.id} is valid`);
              context.stockIssuances.push(event.data);
            },
          },
          {
            target: "validationError",
            actions: (context, event) => {
              console.log(`Error validating ${event.data.security_id}`);
            },
          },
        ],
        TX_STOCK_TRANSFER: [
          {
            target: "capTable",
            cond: valid_tx_stock_transfer,
            actions: (context, event) => {
              console.log(`TX_STOCK_TRANSFER ${event.data.id} is valid`);
              context.stockIssuances = context.stockIssuances.filter((obj) => {
                return obj.security_id !== event.data.security_id;
              });
            },
          },
          {
            target: "validationError",
            actions: (context, event) => {
              console.log(
                `Error validating ${event.data.object_type} with id: ${event.data.id}`
              );
            },
          },
        ],
        TX_STOCK_CANCELLATION: [
          {
            target: "capTable",
            cond: valid_tx_stock_cancellation,
            actions: (context, event) => {
              console.log(`TX_STOCK_CANCELLATION ${event.data.id} is valid`);
              context.stockIssuances = context.stockIssuances.filter((obj) => {
                return obj.security_id !== event.data.security_id;
              });
            },
          },
          {
            target: "validationError",
            actions: (context, event) => {
              console.log(
                `Error validating ${event.data.object_type} with id: ${event.data.id}`
              );
            },
          },
        ],
        TX_STOCK_RETRACTION: [
          {
            target: "capTable",
            cond: valid_tx_stock_retraction,
            actions: (context, event) => {
              console.log(`TX_STOCK_RETRACTION ${event.data.id} is valid`);
              context.stockIssuances = context.stockIssuances.filter((obj) => {
                return obj.security_id !== event.data.security_id;
              });
            },
          },
          {
            target: "validationError",
            actions: (context, event) => {
              console.log(
                `Error validating ${event.data.object_type} with id: ${event.data.id}`
              );
            },
          },
        ],
        TX_STOCK_ACCEPTANCE: [
          {
            target: "capTable",
            cond: valid_tx_stock_acceptance,
            actions: (context, event) => {
              console.log(`TX_STOCK_ACCEPTANCE ${event.data.id} is valid`);
              context.stockIssuances = context.stockIssuances.filter((obj) => {
                return obj.security_id !== event.data.security_id;
              });
            },
          },
          {
            target: "validationError",
            actions: (context, event) => {
              console.log(
                `Error validating ${event.data.object_type} with id: ${event.data.id}`
              );
            },
          },
        ],
        TX_STOCK_REISSUANCE: [
          {
            target: "capTable",
            cond: valid_tx_stock_reissuance,
            actions: (context, event) => {
              console.log(`TX_STOCK_REISSUANCE ${event.data.id} is valid`);
              context.stockIssuances = context.stockIssuances.filter((obj) => {
                return obj.security_id !== event.data.security_id;
              });
            },
          },
          {
            target: "validationError",
            actions: (context, event) => {
              console.log(
                `Error validating ${event.data.object_type} with id: ${event.data.id}`
              );
            },
          },
        ],
        TX_STOCK_CONVERSION: [
          {
            target: "capTable",
            cond: valid_tx_stock_conversion,
            actions: (context, event) => {
              console.log(`TX_STOCK_CONVERSION ${event.data.id} is valid`);
              context.stockIssuances = context.stockIssuances.filter((obj) => {
                return obj.security_id !== event.data.security_id;
              });
            },
          },
          {
            target: "validationError",
            actions: (context, event) => {
              console.log(
                `Error validating ${event.data.object_type} with id: ${event.data.id}`
              );
            },
          },
        ],
        TX_STOCK_REPURCHASE: [
          {
            target: "capTable",
            cond: valid_tx_stock_repurchase,
            actions: (context, event) => {
              console.log(`TX_STOCK_REPURCHASE ${event.data.id} is valid`);
              context.stockIssuances = context.stockIssuances.filter((obj) => {
                return obj.security_id !== event.data.security_id;
              });
            },
          },
          {
            target: "validationError",
            actions: (context, event) => {
              console.log(
                `Error validating ${event.data.object_type} with id: ${event.data.id}`
              );
            },
          },
        ],
        RUN_EOD: {
          taget: "capTable",
          actions: (context, event) => {
            console.log(`Cap table as of end of day on ${event.date}:`);
            console.log(context.stockIssuances);
          },
        },
      },
    },
    validationError: {
      type: "final",
    },
  },
};

// Create xState machine
const promiseMachine = createMachine(ocfMachine);

const promiseService = interpret(promiseMachine).onTransition((state) => {
  if (state.value == "validationError") {
    console.log(`Validation stopped...`);
  }
});

// Run interpreter

promiseService.start();

let currentDate = null;

sorted_transactions.forEach((ele) => {
  if (ele.date != currentDate) {
    if (currentDate == null) {
      console.log(`Start transaction validation...`);
    } else {
      promiseService.send({ type: "RUN_EOD", date: currentDate });
    }
  }
  currentDate = ele.date;
  if (ele.object_type == "TX_STOCK_ISSUANCE") {
    promiseService.send({ type: "TX_STOCK_ISSUANCE", data: ele });
  } else if (ele.object_type == "TX_STOCK_TRANSFER") {
    promiseService.send({ type: "TX_STOCK_TRANSFER", data: ele });
  } else if (ele.object_type == "TX_STOCK_CANCELLATION") {
    promiseService.send({ type: "TX_STOCK_CANCELLATION", data: ele });
  } else if (ele.object_type == "TX_STOCK_RETRACTION") {
    promiseService.send({ type: "TX_STOCK_RETRACTION", data: ele });
  } else if (ele.object_type == "TX_STOCK_ACCEPTANCE") {
    promiseService.send({ type: "TX_STOCK_ACCEPTANCE", data: ele });
  } else if (ele.object_type == "TX_STOCK_REISSUANCE") {
    promiseService.send({ type: "TX_STOCK_REISSUANCE", data: ele });
  } else if (ele.object_type == "TX_STOCK_CONVERSION") {
    promiseService.send({ type: "TX_STOCK_CONVERSION", data: ele });
  } else if (ele.object_type == "TX_STOCK_REPURCHASE") {
    promiseService.send({ type: "TX_STOCK_REPURCHASE", data: ele });
  }
});

promiseService.send({ type: "RUN_EOD", date: currentDate });

promiseService.stop();
