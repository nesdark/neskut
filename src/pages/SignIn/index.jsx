import { Button } from '../../components/Button';
import { InputField } from '../../components/InputField';
import { Section } from '../../components/Section';
import { Span } from '../../components/Span';

import { Container, Form } from './styles';

export function SignIn() {
  return (
    <Container>
      <main>
        <Section>
          <h3>
            <img src="/logo.png" alt="Neskut Logo" className="logo" />
          </h3>
          <div className="paragraphs">
            <p>
              <Span>Follow</Span> friends and communities of your interest.
            </p>
            <p>
              <Span>Discover</Span> new people and communities through your
              explore.
            </p>
            <p>
              <Span>Share</Span> ideas and thoughts in one place.
            </p>
          </div>
        </Section>
        <Form>
          <img src="/code.png" alt="Men using a pc with headphones" />

          <h3>
            Access <strong>neskut</strong> with your username and password
          </h3>

          <div>
            <InputField
              type="text"
              title="Username"
              placeholder="Enter your username."
            />
            <InputField
              type="password"
              title="Username"
              placeholder="Enter your password."
            />
          </div>

          <Button>Login</Button>
        </Form>
      </main>
    </Container>
  );
}
