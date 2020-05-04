import { moduleMetadata, storiesOf } from '@storybook/angular';
import { TestModule } from './test.module';
import { TestComponent } from './test.component';

const stories = storiesOf('Test Component', module).addDecorator(
  moduleMetadata({
    imports: [TestModule],
  }),
);
stories.add('test', () => ({
  component: TestComponent,
  props: {
  },
}));
