import styled, { css } from "styled-components";
import { themeSelector } from "../../theme";

export const Container = styled.div`
  padding: ${themeSelector.space(1)} ${themeSelector.space(1)};
  border: 1px solid lightgray;
  border-radius: ${themeSelector.borderRadius("md")};
  width: 1200px;

  &:focus-whithin {
    border-color: ${themeSelector.color("primary")};
    outline: 2px solid gray;
  }

  ${themeSelector.breakpoint("2xl")} {
    width: 1200px;
  }

  ${themeSelector.breakpoint("xl")} {
    width: 980px;
  }

  ${themeSelector.breakpoint("lg")} {
    width: 724px;
  }

  ${themeSelector.breakpoint("sm")} {
    width: 440px;
  }
`;

export const LabelContainer = styled.div`
  width: 1200px;
  display: flex;
  text-align: left;

  ${themeSelector.breakpoint("2xl")} {
    width: 1200px;
  }

  ${themeSelector.breakpoint("xl")} {
    width: 980px;
  }

  ${themeSelector.breakpoint("lg")} {
    width: 724px;
  }

  ${themeSelector.breakpoint("sm")} {
    width: 440px;
  }
`;
export const Label = styled.div`
  font-size: ${themeSelector.space(4)};
  color: #444444;
  font-weight: 600;
`;

export const InputContainer = styled.input<{ hasError: boolean }>`
  border: none;
  width: 100%;
  padding: ${themeSelector.space(3)};

  ${(hasError) =>
    hasError &&
    css`
      border-color: ${themeSelector.color("error")};
    `}
`;

export const HelpText = styled.p`
  color: ${themeSelector.color("error")};
  font-size: ${themeSelector.space(4)};
  margin-top: ${themeSelector.space(1)};
`;
export const HelpTextContainer = styled.div`
  width: 1200px;
  display: flex;
  text-align: left;
  flex-direction: column;
  ${themeSelector.breakpoint("2xl")} {
    width: 1200px;
  }

  ${themeSelector.breakpoint("xl")} {
    width: 980px;
  }

  ${themeSelector.breakpoint("lg")} {
    width: 724px;
  }

  ${themeSelector.breakpoint("sm")} {
    width: 440px;
  }
`;
