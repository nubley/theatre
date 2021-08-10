import React from 'react'
import styled from 'styled-components'
import {panelZIndexes} from '@theatre/studio/panels/BasePanel/common'
import ProjectsList from './ProjectsList/ProjectsList'
import {pointerEventsAutoInNormalMode} from '@theatre/studio/css'
import ToolbarIconButton from '@theatre/studio/uiComponents/toolbar/ToolbarIconButton'
import {VscListTree} from 'react-icons/all'

const Container = styled.div`
  background-color: transparent;
  pointer-events: none;
  position: absolute;
  left: 0;
  top: 12px;
  bottom: 0px;
  right: 0;
  z-index: ${panelZIndexes.outlinePanel};

  &:before {
    display: block;
    content: ' ';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 20px;
    ${pointerEventsAutoInNormalMode};
  }

  &:hover:before {
    top: -12px;
    width: 300px;
  }
`

const TriggerContainer = styled.div`
  margin-left: 12px;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`

const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transform: translateX(-100%);
  pointer-events: none;

  ${Container}:hover & {
    transform: translateX(0);
  }
`

const headerHeight = `32px`

const TriggerButton = styled(ToolbarIconButton)`
  ${Container}:hover & {
    --item-bg: rgba(36, 38, 42, 0.95);
    --item-border-color: rgba(255, 255, 255, 0.22);
    color: white;
  }
`

const Title = styled.div`
  margin: 0 12px;
  color: #ffffffc2;
  font-weight: 500;
  font-size: 10px;
  user-select: none;
  position: relative;
  display: none;
  ${Container}:hover & {
    display: block;
  }

  &:after {
    position: absolute;
    inset: 4px 0px;
    display: block;
    content: ' ';
    pointer-events: none;
    z-index: -1;
    background-color: #69777947;
    border-radius: 0 2px 2px 0;
  }
`

const Body = styled.div`
  ${pointerEventsAutoInNormalMode};
  position: absolute;
  top: ${headerHeight};
  left: 8px;
  height: auto;
  max-height: calc(100% - ${headerHeight});
  overflow-y: scroll;
  overflow-x: visible;
  padding: 0;
  user-select: none;
`

const OutlinePanel: React.FC<{}> = (props) => {
  return (
    <Container>
      <TriggerContainer>
        <TriggerButton icon={<VscListTree />} label="Outline" />
        <Title>Outline</Title>
      </TriggerContainer>
      <Content>
        {/* <Header><Title>Outline</Title></Header> */}
        <Body>
          <ProjectsList />
        </Body>
      </Content>
    </Container>
  )
}

export default OutlinePanel
