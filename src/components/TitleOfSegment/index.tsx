/**
 *
 * TitleOfSegment
 *
 */
import React, { memo } from "react";
import { TitleOfSegmentWrapper } from "./styled";

interface Props {
  title: string;
}

export const TitleOfSegment = memo(({ title }: Props) => {
  return <TitleOfSegmentWrapper>{title}</TitleOfSegmentWrapper>;
});
