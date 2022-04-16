import { FC, ReactNode, useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';

import { useStore } from 'hooks';
import Error from 'components/ui/Error';
import ProjectLayout from '../ProjectLayout/ProjectLayout';
// import BashEditorMenu from './BashEditorMenu'
import BashEditorMenuOld from './BashEditorMenuOld';

interface Props {
  title: string;
  children: ReactNode;
}

const BashEditorLayout: FC<Props> = ({ title, children }) => {
  const { content } = useStore();

  useEffect(() => {
    content.load();
  }, []);

  return content.error ? (
    <ProjectLayout>
      <Error error={content.error} />
    </ProjectLayout>
  ) : (
    <ProjectLayout
      isLoading={content.isLoading}
      title={title || 'Bash'}
      product="Bash Editor"
      productMenu={<BashEditorMenuOld />}
    >
      {children}
    </ProjectLayout>
  );
};

export default observer(BashEditorLayout);
