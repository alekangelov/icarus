import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Modal } from './Modal';

export default {
  title: 'Feedback/Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});

const Content = () => (
  <>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto non culpa
    eaque omnis nesciunt enim, ipsa voluptas laudantium consectetur harum
    laborum exercitationem, fuga dignissimos dolor, excepturi velit et ut
    architecto?
    <br />
    <br />
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto non culpa
    eaque omnis nesciunt enim, ipsa voluptas laudantium consectetur harum
    laborum exercitationem, fuga dignissimos dolor, excepturi velit et ut
    architecto?
    <br />
    <br /> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto non
    culpa eaque omnis nesciunt enim, ipsa voluptas laudantium consectetur harum
    laborum exercitationem, fuga dignissimos dolor, excepturi velit et ut
    architecto?
    <br />
    <br /> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto non
    culpa eaque omnis nesciunt enim, ipsa voluptas laudantium consectetur harum
    laborum exercitationem, fuga dignissimos dolor, excepturi velit et ut
    architecto?
    <br />
    <br />
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto non culpa
    eaque omnis nesciunt enim, ipsa voluptas laudantium consectetur harum
    laborum exercitationem, fuga dignissimos dolor, excepturi velit et ut
    architecto?
    <br />
    <br />
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto non culpa
    eaque omnis nesciunt enim, ipsa voluptas laudantium consectetur harum
    laborum exercitationem, fuga dignissimos dolor, excepturi velit et ut
    architecto?
    <br />
    <br />
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto non culpa
    eaque omnis nesciunt enim, ipsa voluptas laudantium consectetur harum
    laborum exercitationem, fuga dignissimos dolor, excepturi velit et ut
    architecto?
    <br />
    <br />
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto non culpa
    eaque omnis nesciunt enim, ipsa voluptas laudantium consectetur harum
    laborum exercitationem, fuga dignissimos dolor, excepturi velit et ut
    architecto?
    <br />
    <br />
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto non culpa
    eaque omnis nesciunt enim, ipsa voluptas laudantium consectetur harum
    laborum exercitationem, fuga dignissimos dolor, excepturi velit et ut
    architecto?
    <br />
    <br />
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto non culpa
    eaque omnis nesciunt enim, ipsa voluptas laudantium consectetur harum
    laborum exercitationem, fuga dignissimos dolor, excepturi velit et ut
    architecto?
    <br />
    <br />
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto non culpa
    eaque omnis nesciunt enim, ipsa voluptas laudantium consectetur harum
    laborum exercitationem, fuga dignissimos dolor, excepturi velit et ut
    architecto?
    <br />
    <br />
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto non culpa
    eaque omnis nesciunt enim, ipsa voluptas laudantium consectetur harum
    laborum exercitationem, fuga dignissimos dolor, excepturi velit et ut
    architecto?
    <br />
    <br />
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto non culpa
    eaque omnis nesciunt enim, ipsa voluptas laudantium consectetur harum
    laborum exercitationem, fuga dignissimos dolor, excepturi velit et ut
    architecto?
    <br />
    <br />
  </>
);

Primary.args = {
  visible: true,
  content: <Content />,
  title: 'Lorem ipsum',
  maximizable: true,
  maximized: true,
};
