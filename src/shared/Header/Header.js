import React from "react";

import { Grid } from "semantic-ui-react";
import FilterButton from "shared/FilterButton";

import AccountButton from "./_/AccountButton";

export default () => (
  <>
    <Grid>
      <Grid.Column floated="left">
        <FilterButton />
      </Grid.Column>
      <Grid.Column floated="right">
        <AccountButton />
      </Grid.Column>
    </Grid>
  </>
);
