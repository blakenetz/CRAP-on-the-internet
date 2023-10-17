import Image from "next/image";

import { Data } from "@/pages";
import { Button, Form, Grid, Header, Segment } from "semantic-ui-react";

export default function Quiz({ data }: { data: Data }) {
  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 1000 }}>
        <Header as="h2" color="teal" textAlign="center">
          <h1>National Park Squiz</h1>
        </Header>
        <Segment stacked>
          <h2>Alright you son of a bitch</h2>
          <h3>Tell me where this is</h3>

          <section>
            <Form size="large">
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="E-mail address"
              />

              <Button color="teal" fluid size="large">
                Guess
              </Button>
            </Form>
            <div>
              <Image
                src={data.imageInfo.url}
                alt={data.imageInfo.alt}
                layout="fill"
                objectFit="contain"
              />
            </div>
          </section>
        </Segment>
      </Grid.Column>
    </Grid>
  );
}
