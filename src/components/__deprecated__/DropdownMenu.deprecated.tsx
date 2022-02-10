import { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

import { Icon as Icons } from '../types/ui/icon';
import Label from '../typography/Label';
import Icon from '../ui/Icon';

const DeprecatedDropdownMenu = ({
  defaultValue = null,
  error = false,
  items = [],
  label,
  onChange,
  placeholder,
  searchEnabled = false,
  showNone = true,
  zIndex,
}: {
  defaultValue?: null | string | number;
  error?: boolean;
  items:
    | {
        component?: React.ReactNode;
        label: string;
        value?: null | string | number;
      }[];
  label?: string | number;
  onChange?: (val: null | undefined | string | number) => any;
  placeholder?: string;
  searchEnabled?: boolean;
  showNone?: boolean;
  zIndex?: number;
}): React.ReactElement => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState<
    null | undefined | string | number
  >(defaultValue);
  const [selectedItemView, setSelectedItemView] =
    useState<React.ReactNode>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredItems, setFilteredItems] = useState(items);

  useEffect(() => {
    setSelectedItem(defaultValue);
  }, [defaultValue]);

  useEffect(() => {
    if (selectedItem) {
      const item = items.find(i => i.value === selectedItem);

      if (item) {
        setSelectedItemView(item.component ? item.component : item.label);
      }
    }
  }, [selectedItem, items]);

  useEffect(() => {
    if (items) {
      setFilteredItems(items.length ? items : []);
    }
  }, [items]);

  useEffect(() => {
    if (items && items.length && searchTerm) {
      const filtered = items.filter(i =>
        typeof i.label === 'string'
          ? i.label.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
          : i.label === searchTerm,
      );

      setFilteredItems(filtered);
    } else {
      setFilteredItems(items);
    }
  }, [searchTerm, items]);

  return (
    <Container
      className="dropdown-menu"
      data-testid="dropdown-menu"
      onMouseLeave={() => setMenuVisible(false)}
      zIndex={zIndex}
    >
      {label && <Label>{label}</Label>}

      <DropdownContainer
        data-testid="dropdown-menu-dropdown-container"
        error={error}
        menuVisible={menuVisible}
      >
        <SelectedButton
          menuVisible={menuVisible}
          onClick={() => setMenuVisible(!menuVisible)}
          onKeyPress={e => {
            e.preventDefault();

            if (e.key === 'Enter') {
              setMenuVisible(!menuVisible);
            }
          }}
          onBlur={e => {
            console.log('e', e);
          }}
        >
          <Arrow className="down-arrow">
            <Icon
              name={Icons.CaretDownArrow}
              className={`${menuVisible ? 'up' : ''}`}
            />
          </Arrow>

          <Selected className="dropdown-menu-selected">
            {selectedItem === null ? (
              <span className="nothing-selected">{placeholder}</span>
            ) : (
              <SelectedItem>{selectedItemView}</SelectedItem>
            )}
          </Selected>
        </SelectedButton>

        <Menu className="dropdown-menu-menu" menuVisible={menuVisible}>
          {searchEnabled && (
            <Search menuVisible={menuVisible}>
              <Icon name={Icons.Search} />
              <input
                placeholder="Search"
                onChange={e => setSearchTerm(e.target.value)}
              />
            </Search>
          )}

          <ul>
            {showNone && (
              <li>
                <button
                  onClick={() => {
                    setSelectedItem(null);

                    if (onChange) onChange(null);

                    setMenuVisible(false);
                  }}
                  onKeyPress={e => {
                    if (e.key === 'Enter') {
                      setSelectedItem(null);

                      if (onChange) onChange(null);

                      setMenuVisible(false);
                    }
                  }}
                >
                  None
                </button>
              </li>
            )}

            {filteredItems &&
              filteredItems.map((item, key) => {
                return (
                  <li key={key}>
                    <button
                      onClick={() => {
                        setSelectedItem(item.value);

                        if (onChange) onChange(item.value);

                        setMenuVisible(false);
                      }}
                      onKeyPress={e => {
                        if (e.key === 'Enter') {
                          setSelectedItem(item.value);

                          if (onChange) onChange(item.value);

                          setMenuVisible(false);
                        }
                      }}
                    >
                      {item.component ? item.component : item.label}
                    </button>
                  </li>
                );
              })}
          </ul>
        </Menu>
      </DropdownContainer>
    </Container>
  );
};

const Container = styled.div<{
  zIndex?: number;
}>`
  position: relative;
  z-index: ${props => props.zIndex || 1000};

  label {
    display: block;
    margin-bottom: 8px;
  }
`;

const SelectedButton = styled.button<{
  menuVisible: boolean;
}>`
  background: var(--bg-color-depth-3);
  border: ${props =>
    props.menuVisible ? '2px solid transparent' : '2px solid #dadada'};
  border-radius: 6px;
  padding: 5px 6px 6px 6px;
  text-align: left;
  transition: border 0.2s ease-in-out;
  width: 100%;

  &:focus {
    border: ${props =>
      props.menuVisible
        ? '2px solid transparent'
        : '2px solid rgba(65, 145, 63, 1)'};
  }

  &:hover {
    border: ${props =>
      props.menuVisible ? '2px solid transparent' : '2px solid #aaa'};
  }
`;

const DropdownContainer = styled.div<{
  menuVisible?: boolean;
  zIndex?: number;
  error?: boolean;
}>`
  background: var(--bg-color-depth-3);
  border: 1px solid transparent;
  border-radius: 6px;
  box-shadow: 0 0 0 transparent;
  position: absolute;
  transition: border 0.2s ease-in-out, border-radius 0.2s ease-in-out,
    box-shadow 0.2s ease-in-out, height 0.2s ease-in-out;
  user-select: none;
  width: 100%;
  z-index: ${props => (props.zIndex ? props.zIndex : '1000000')};

  ${props =>
    props.error &&
    css`
      border: 1px solid rgba(255, 65, 54, 1);
    `}

  ${props =>
    props.menuVisible &&
    css`
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
        0 4px 6px -2px rgba(0, 0, 0, 0.05) !important;
      border: 1px solid rgba(65, 145, 63, 1) !important;
      height: auto;
    `}
`;

const Arrow = styled.div`
  background: #f2f2f2;
  border: none;
  border-radius: 100px;
  float: right;
  height: 22px;
  line-height: 25px;
  margin: 5px 5px 0 0;
  position: absolute;
  right: 6px;
  text-align: center;
  transition: all 0.2s ease-in;
  width: 22px;

  &:after {
    content: '';
    clear: both;
    display: block;
  }

  svg {
    fill: rgba(190, 190, 190, 1);
    height: 10px;
    position: relative;
    top: -2px;
    transition: position 0.2s ease-in, all 0.2s ease-in;
    vertical-align: middle;
    width: 10px;

    &.up {
      top: -4px;
      transform: rotate(-180deg);
    }
  }
`;

const Selected = styled.div`
  color: #5b5b5b;
  overflow: hidden;
  padding: 0 6px;

  span.nothing-selected {
    color: #aaa;
    font-size: 14px;
    font-weight: 500;
    line-height: 30px;
  }
`;

const SelectedItem = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 30px;

  label {
    color: #5b5b5b;
    font-size: 14px;
    font-weight: 500;
  }

  img {
    max-height: 24px;
  }
`;

const Menu = styled.div<{
  menuVisible?: boolean;
}>`
  padding: 0;
  position: relative;
  transition: height 0.2s ease-in;

  &:after {
    content: '';
    clear: both;
    display: block;
  }

  ${props =>
    !props.menuVisible
      ? css`
          height: 0;
          transition: none;
          display: none;
        `
      : css`
          height: auto;
          padding: 0 6px 6px 6px;
          display: block;
        `}

  ul {
    background: var(--bg-color-depth-2);
    box-shadow: inset 2px 2px 4px 0 rgba(45, 49, 53, 0.1);
    /* box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06) !important; */
    border-radius: 4px;
    margin: 0;
    max-height: 193px;
    overflow: hidden;
    overflow-y: scroll;
    padding: 2px;
    width: 100%;

    li {
      button,
      a {
        background: transparent;
        border: 1px solid transparent;
        border-radius: 4px;
        box-shadow: 0 0 0 0 transparent, 0 0 0 0 transparent;
        color: #5b5b5b;
        display: block;
        font-size: 12px;
        font-weight: 600;
        line-height: 32px;
        list-style: none;
        padding: 0 11px;
        pointer-events: all;
        text-align: left;
        transform: scale(1);
        transition: background 0.15s ease-in, border 0.15s ease-in,
          box-shadow 0.15s ease-in;
        width: 100%;

        img {
          max-height: 20px;
          vertical-align: middle;
        }

        &:focus {
          background: var(--bg-color-depth-3);
          border: 1px solid #ddd;
          box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05) !important;
          color: #3b3b3b;
        }

        &:hover {
          background: var(--bg-color-depth-3);
          border: 1px solid #ddd;
          box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05) !important;
          color: #3b3b3b;
        }
      }
    }
  }
`;

const Search = styled.div<{
  menuVisible?: boolean;
}>`
  opacity: 0;
  margin: 5px 0 8px 0;
  padding: 0;
  position: relative;
  transition: opacity 0.2s ease-in;

  svg {
    fill: #9b9b9b;
    height: 12px;
    left: 12px;
    position: absolute;
    top: 9px;
    width: 12px;
  }

  ${props =>
    !props.menuVisible
      ? css`
          opacity: 0;
        `
      : css`
          opacity: 1;
        `}

  input {
    background: #eee;
    border: 2px solid transparent;
    border-radius: 32px;
    color: #5b5b5b;
    font-size: 13px;
    line-height: 26px;
    outline: none;
    padding: 0 10px 0 30px;
    width: 100%;

    &:focus {
      border: 2px solid #0074d9;
    }

    &::placeholder {
      color: #9b9b9b;
    }
  }
`;

export default DeprecatedDropdownMenu;
