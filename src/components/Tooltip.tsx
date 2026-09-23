import React, { useId } from 'react';

interface TooltipProps {
  content: string;
  subtext?: string;
  position?: 'top' | 'bottom';
  align?: 'center' | 'left' | 'right';
  children: React.ReactElement<React.HTMLAttributes<HTMLElement>>;
  className?: string;
}

export const Tooltip: React.FC<TooltipProps> = ({
  content,
  subtext,
  position = 'bottom',
  align = 'center',
  children,
  className = ''
}) => {
  const id = useId();

  // Position classes
  const posClass = position === 'bottom' ? 'top-full mt-2.5' : 'bottom-full mb-2.5';

  // Alignment classes
  const alignClass =
    align === 'center'
      ? 'left-1/2 -translate-x-1/2'
      : align === 'right'
      ? 'right-0'
      : 'left-0';

  // Arrow alignment
  const arrowAlign =
    align === 'center'
      ? 'left-1/2 -translate-x-1/2'
      : align === 'right'
      ? 'right-3'
      : 'left-3';

  // Safely merge aria-describedby with any existing prop
  const childProps = children.props as React.HTMLAttributes<HTMLElement>;
  const existingAriaDescribedBy = childProps ? childProps['aria-describedby'] : undefined;
  const mergedAriaDescribedBy = existingAriaDescribedBy
    ? `${existingAriaDescribedBy} ${id}`
    : id;

  const trigger = React.cloneElement(children, {
    'aria-describedby': mergedAriaDescribedBy
  } as React.HTMLAttributes<HTMLElement>);

  return (
    <div className={`relative inline-flex items-center group/tooltip ${className}`}>
      {trigger}
      <div
        id={id}
        role="tooltip"
        className={`absolute ${posClass} ${alignClass} pointer-events-none z-50 flex flex-col items-center opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible group-focus-within/tooltip:opacity-100 group-focus-within/tooltip:visible transition-all duration-150 ease-out transform ${
          position === 'bottom'
            ? '-translate-y-1 group-hover/tooltip:translate-y-0 group-focus-within/tooltip:translate-y-0'
            : 'translate-y-1 group-hover/tooltip:translate-y-0 group-focus-within/tooltip:translate-y-0'
        }`}
      >
        {position === 'bottom' && (
          <div
            className={`w-2 h-2 rotate-45 bg-[#0a101b] border-t border-l border-[#223554] -mb-1 z-10 ${
              align !== 'center' ? `absolute -top-1 ${arrowAlign}` : ''
            }`}
          />
        )}
        <div className="relative px-2.5 py-1.5 rounded-md bg-[#0a101b]/95 dark:bg-[#0a101b]/95 light:bg-[#0f172a]/95 text-slate-100 border border-[#223554] shadow-2xl backdrop-blur-md text-[11px] font-mono whitespace-nowrap flex flex-col items-center">
          <span className="font-semibold text-slate-100 tracking-tight leading-tight">
            {content}
          </span>
          {subtext && (
            <span className="text-[10px] text-cyan-400 mt-0.5 font-normal leading-tight">
              {subtext}
            </span>
          )}
        </div>
        {position === 'top' && (
          <div
            className={`w-2 h-2 rotate-45 bg-[#0a101b] border-b border-r border-[#223554] -mt-1 z-10 ${
              align !== 'center' ? `absolute -bottom-1 ${arrowAlign}` : ''
            }`}
          />
        )}
      </div>
    </div>
  );
};
