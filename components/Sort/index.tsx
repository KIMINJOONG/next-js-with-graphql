import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { CLOUD_FRONT } from 'assets/utils/ENV';
import React from 'react';
import { SortableContainer, SortableElement, SortableHandle } from 'react-sortable-hoc';
import { StyledContainer, StyledImg, StyledItem, StyledRemove } from './styles';

export interface IPicSortComponent {
  images: any;
  onDelete: (index: number) => void;
  onSortEnd: ({ oldIndex, newIndex }: { oldIndex: number; newIndex: number }) => void;
  width?: number
  mwidth?: number
  height?: number
  mheight?: number
}
const Handle = SortableHandle(({ src, width, mwidth, height, mheight }: {src: string, width?: number, mwidth?: number, height?: number, mheight?: number}) => {
  return <StyledImg src={src} width={width} mwidth={mwidth} height={height} mheight={mheight}/>;
});
const SortableItem = SortableElement((props:any) => {
  const { value: item, index, onDelete, width, mwidth, height, mheight, ...rest } = props;
  return (
    <StyledItem width={width} mwidth={mwidth} height={height} mheight={mheight} {...rest}>
      {/* @ts-ignore */}
      <Handle src={item.file ? item.key : CLOUD_FRONT + item.key} width={width} mwidth={mwidth} height={height} mheight={mheight}/>
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

function PicSortComponent({ images, onSortEnd, onDelete, ...rest }: IPicSortComponent) {
  {/* @ts-ignore */}
  return ( <SortableList useDragHandle axis="xy" items={images} onSortEnd={onSortEnd} onDelete={onDelete} {...rest}/>);
}

export default PicSortComponent;
