import { memo, ReactElement, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

import { Amount, Depth } from '../../types';
import {
  SearchInput,
  SearchInputProps,
} from '../forms/inputs/text/SearchInput';
import { Container, ContainerProps } from '../layout/Container';
import { CloseButton } from '../modals/CloseButton';
import { Heading } from '../typography/Heading';

type UniversalSearchProps = SearchInputProps;

export const UniversalSearch = memo(
  (props: UniversalSearchProps): ReactElement => {
    const [resultsVisible, setResultsVisible] = useState(false);
    const [searchValue, setSearchValue] = useState<string>();
    const [isFocused, setFocused] = useState(false);

    useEffect(() => {
      if (isFocused && searchValue) {
        setResultsVisible(true);
      } else {
        setResultsVisible(false);
      }
    }, [isFocused, searchValue]);

    return (
      <Container
        className="universal-search"
        // onMouseLeave={() => setResultsVisible(false)}
        {...props}
      >
        <SearchInput
          events={{
            focus: {
              onBlur: () => {
                setFocused(false);
              },
              onFocus: () => {
                setFocused(true);
              },
            },
            input: {
              onValueChange: ({ value }) => setSearchValue(value),
            },
          }}
          name="universal-search"
          placeholder="Search everything"
          spellCheck={false}
        />

        <SearchResults
          as={Container}
          resultsVisible={resultsVisible}
          depth={Depth.Highest}
          padding={{ all: Amount.More }}
        >
          <CloseButton
            events={{
              mouse: {
                onClick: () => setResultsVisible(false),
              },
            }}

            // size={Size.Small}
          />

          <Heading>Search Results</Heading>
        </SearchResults>
      </Container>
    );
  },
);

// const Input = styled.div<{
//   focused: boolean;
// }>`
//   cursor: text;
//   position: relative;
//   width: calc(100% - var(--amount-default));

//   &:after {
//     border: 2px solid var(--color-primary);
//     border-radius: var(--amount-more);
//     bottom: -4px;
//     content: '';
//     display: block;
//     left: -12px;
//     opacity: 0;
//     padding: 0 var(--amount-less);
//     position: absolute;
//     right: -12px;
//     top: -4px;
//     transition: opacity 0.2s ease-in-out;
//   }

//   ${props =>
//     props.focused &&
//     css`
//       &:after {
//         opacity: 1;
//       }
//     `};

//   input {
//     background: transparent;
//     border: none;
//     color: var(--text-color-default);
//     flex: 1;
//     font-size: var(--text-size-input-value);
//     font-weight: var(--text-font-weight-default);
//     height: var(--size-default);
//     outline: none;
//     vertical-align: middle;
//     width: 100%;

//     &::placeholder {
//       color: var(--text-color-light);
//     }
//   }
// `;

const SearchResults = styled.div<{
  readonly resultsVisible?: boolean;
}>`
  backdrop-filter: blur(3px);
  background: var(--bg-color-depth-highest-opaque);
  /* box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2); */
  border-radius: var(--border-radius);
  cursor: default;
  display: none;
  overflow: hidden;
  overflow-y: scroll;
  left: 20px;
  max-height: 390px;
  min-height: 300px;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  top: 80%;
  transform: translateY(-300px);
  transition: opacity 0.18s ease-in-out, transform 0.18s ease-in-out;
  min-width: 500px;
  max-width: 500px;
  z-index: 3;

  .result {
    margin-bottom: 3px;
  }

  ${props =>
    props.resultsVisible &&
    css`
      display: flex;
      opacity: 1;
      pointer-events: all;
      transform: translateY(0);
    `};

  /* @media (min-width: 992px) {
    border-radius: 0 0 8px 0;
    left: 15px;
    top: 60px;
    width: 480px;
  } */
`;

// const NoResults = styled.div<{
//   darkMode?: boolean;
// }>`
//   color: #9b9b9b;
//   font-size: 14px;
//   font-weight: 500;
//   text-align: center;
// `;

// const ResultRow = styled.div`
//   margin: 0 0 2px 0;

//   &:after {
//     clear: both;
//     content: '';
//     display: block;
//   }
// `;
