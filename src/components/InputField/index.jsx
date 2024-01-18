import { Container } from './styles';

export function InputField({ title, type, ...rest }) {
  return (
    <Container>
      <div className="sr-only">{title}</div>
      <input type={type} {...rest} />
    </Container>
  );
}
