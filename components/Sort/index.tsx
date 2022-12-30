import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { CLOUD_FRONT } from 'assets/utils/ENV';
import React from 'react';
import { SortableContainer, SortableElement, SortableHandle } from 'react-sortable-hoc';
import { StyledContainer, StyledImg, StyledItem, StyledRemove } from './styles';

export interface IPicSortComponent {
  images: any;
  onDelete: (index: number) => void;
  onSortEnd: ({ oldIndex, newIndex }: { oldIndex: number; newIndex: number }) => void;
}
const Handle = SortableHandle(({ src }: {src: string}) => {
  return <StyledImg src={src} />;
});
const SortableItem = SortableElement((props:any) => {
  const { value: item, index, onDelete, ...rest } = props;
  return (
    <StyledItem {...rest}>
      {/* @ts-ignore */}
      <Handle src={item.file ? item.key : CLOUD_FRONT + item.key} />
      <StyledRemove onClick={() => onDelete(item.list_order)}>
          <HighlightOffIcon fontSize="large" />
      </StyledRemove>
    </StyledItem>
  );
});

const SortableList = SortableContainer((props: any) => {
  const { items, ...restProps } = props;
  return (
    <StyledContainer>
      {/* @ts-ignore */}
      {items.map((item, index) => (
        <SortableItem
          key={`item-${index}`}
          index={index}
          value={{ ...item, index }}
          {...restProps}
        />
      ))}
    </StyledContainer>
  );
});

function PicSortComponent({ images, onSortEnd, onDelete }: IPicSortComponent) {
  {/* @ts-ignore */}
  return ( <SortableList useDragHandle axis="xy" items={images} onSortEnd={onSortEnd} onDelete={onDelete}/>);
}

export default PicSortComponent;
