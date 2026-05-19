import { ThemeIcon } from '@mantine/core'

import { ColorGradientStyle } from '@shared/utils/config-parser'

interface IProps {
    getIconFromLibrary: (iconKey: string) => string
    gradientStyle: ColorGradientStyle
    isMobile: boolean
    svgIconColor: string
    svgIconKey: string
}
export const ThemeIconShared = (props: IProps) => {
    const { isMobile, svgIconColor, gradientStyle, svgIconKey, getIconFromLibrary } = props

    return (
        <ThemeIcon
            color={svgIconColor}
            radius="xl"
            size={isMobile ? 36 : 44}
            style={{
                /* fix #5: иконки таймлайна — жёлтый фон, серый цвет, прозрачная граница */
                background: '#ffdc8c',
                border: '1px solid #fab00500',
                boxShadow: gradientStyle.boxShadow,
                flexShrink: 0,
                color: '#898989'
            }}
            variant="light"
        >
            <span
                dangerouslySetInnerHTML={{
                    __html: getIconFromLibrary(svgIconKey)
                }}
                style={{ display: 'flex', alignItems: 'center' }}
            />
        </ThemeIcon>
    )
}
