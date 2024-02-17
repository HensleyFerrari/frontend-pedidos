import styled, { css } from "styled-components";
import { themeSelector } from "../../theme";

export const Container = styled.div`
  padding: ${themeSelector.space(1)} ${themeSelector.space(1)};
  border: 1px solid gray;
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
  max-width: 1200px;
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
export const Label = styled.div`
  font-size: ${themeSelector.space(4)};
  color: #444444;
`;

export const InputContainer = styled.input<{ hasError: boolean }>`
  border: none;
  width: auto;
  padding: ${themeSelector.space(3)};

  ${themeSelector.breakpoint("lg")} {
    width: 100%;
  }

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
  max-width: 1200px;
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
