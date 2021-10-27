import Section from './components/section/section';
import Form from './components/form/form';
import Contacts from './components/contacts/contacts';
import Filter from './components/filter/filter';

export default function App() {
  return (
    <>
      <Section title="Phonebook">
        <Form />
      </Section>
      <Section title="Contacts">
        <Filter />
        <Contacts />
      </Section>
    </>
  );
}
