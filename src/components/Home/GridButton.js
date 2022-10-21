import styled from "styled-components";

export default function GridButton( { isPlayed = false,
                                        soundPlay,
                                        id,
                                        handleSampleChange } ) {
    return <Wrapper isPlayed={isPlayed} onClick={soundPlay}>
                <label onClick={(e)=>e.stopPropagation()}
                       htmlFor={id}>
                    ♫
                </label>
                <input onClick={(e)=>e.stopPropagation()}
                       id={id}
                       type="file"
                       onChange={handleSampleChange}
                />
            </Wrapper>
};

const Wrapper = styled.div`
  border-radius: 4px;
  background: rgba(225, 242, 227, 1);
  background: radial-gradient(circle,
  rgba(173, 201, 174, 1) 0%,
  rgb(120, 176, 120) 100%);
  position: relative;
  overflow: hidden;
  &::before {
    position: absolute;
    content: "";
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 0;
    background: radial-gradient(circle,
    rgba(240, 235, 206, 1) ${(props) => (props.isPlayed ? "20%" : "0%")},
    rgba(170, 138, 86, 1) 100%);
    opacity: ${(props) => (props.isPlayed ? "1" : "0")};
    transition: linear 0.2s;
  }
  &:hover::before {
    opacity: 1;
  }
  &:active::before {
    opacity: 1;
    background: radial-gradient(circle,
    rgba(240, 235, 206, 1) 20%,
    rgba(170, 138, 86, 1) 100%);
  }
  & input {
    display: none;
  }
  & label {
    position: absolute;
    right: 12px;
    top: 12px;
    font-size: 2rem;
  }
`;

