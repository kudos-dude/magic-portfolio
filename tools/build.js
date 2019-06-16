/* eslint-disable no-console */
import webpack from "webpack";
import config from "../webpack.config.prod";
import {
  chalkError,
  chalkSuccess,
  chalkWarning,
  chalkProcessing
} from "./chalkConfig";

process.env.NODE_ENV = "production";

console.log(chalkProcessing("Little gremlins be doin' they thang..."));

webpack(config).run((error, stats) => {
  if (error) {
    console.log(chalkError(error));
    return 1;
  }

  const jsonStats = stats.toJson();

  if (jsonStats.hasErrors) {
    return jsonStats.errors.map(error => console.log(chalkError(error)));
  }

  if (jsonStats.hasWarnings) {
    console.log(chalkWarning("Webpack generated the following warnings: "));
    jsonStats.warnings.map(warning => console.log(chalkWarning(warning)));
  }

  console.log(`Webpack stats: ${stats}`);

  console.log(
    chalkSuccess("Your app done got built son! Sen' that shit to prod!")
  );

  return 0;
});
