import { NextPage } from 'next';
import { LayoutNames } from '@/shared/ui';

export type NextPageApp<Props = object, InitialProps = Props> = NextPage<Props, InitialProps> & {
  layout?: LayoutNames;
  clientOnly?: boolean;
};