import styled from 'styled-components';

export const StatisticsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const StatisticsItem = styled.li`
  padding: 5px;
  border-radius: 5px;
  color: white;

  background-color: rgb(197, 194, 194);
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 1px -1px,
    rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px;

  font-weight: 600;
  font-size: 12px;
  line-height: 1.9;
  letter-spacing: 0.06em;
`;
