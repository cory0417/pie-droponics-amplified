import { Button, Grid, Card, Flex, Heading } from '@aws-amplify/ui-react';

function Title ({user, signOut}) {
    return (
        <Card
          columnStart="1"
          columnEnd="-1"
          rowStart="1"
          rowEnd="2"
        >
          <Grid
            columnGap="0.5rem"
            rowGap="0.5rem"
            templateColumns="3fr 1fr"
            templateRows="1fr"
          >
            <Card>
              <Heading level='1' fontWeight='bold' fontSize="2rem">Welcome to Eduponics 🌱</Heading>
            </Card>
            <Card>
              <Flex
                direction="column"
                justifyContent="left"
                alignItems="end"
                alignContent="flex-start"
                wrap="nowrap"
                gap="0rem"
              >
                <h3>Hello {user.username}!</h3>
                <Button onClick={signOut}>Sign out</Button>
              </Flex>
            </Card>
        </Grid>
        </Card>
    )
}

export default Title;