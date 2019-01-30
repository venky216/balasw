import styled from 'styled-components'

export const DashboardLeftContainer = styled.div`
    width:21%;
    box-shadow:1px 1px 1px 0 rgba(0,0,0,0.12);
    height:90vh;
    position:relative;
    padding:12px;
    background: var(--secondaryColor);
`

export const DropdownSection = styled.div`
  display:flex;
  flex-direction:column;  
`
export const CoordinateListContainer = styled.div`
border-bottom: 1px solid #232634;
display: inline-block;
padding-bottom: 4px;
margin-top: 14px;

`

export const CoordinateListLabel = styled.div`
  font-size: 15px;
  color: #333;
`
export const CoordinateList = styled.div`
  width:100%;
  padding:8px;
  padding-left:0px;
`
export const CoordinateListItem = styled.pre`
  padding: 10px 0px;
  color: #333;
  font-size:15px;
  &:hover{
      background:aliceblue;
  }
`

export const CoodinateListItemHeader = styled.div`
  color:var(--primaryColor);
  font-size:15px;
  padding:10px 0px;
  font-weight:600;
`


