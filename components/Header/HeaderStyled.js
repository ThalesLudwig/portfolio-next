import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Tab = styled.div`
  padding: 5px 5px 2px 5px;
  cursor: pointer;
  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.primary : theme.colors.text};
  font-size: ${({ theme }) => theme.sizes.subtitle};
  border-bottom: ${({ theme, isActive }) =>
    `2px ${isActive ? theme.colors.primary : theme.colors.background} solid`};

  &:hover {
    color: ${({ theme, isActive }) =>
      isActive ? theme.colors.primary : theme.colors.primaryAlt};
    border-bottom: ${({ theme, isActive }) =>
      `2px ${isActive ? theme.colors.primary : theme.colors.primaryAlt} solid`};
  }
`;
