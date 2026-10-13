import { useId } from "react";

type BaseProps = {
  label: string;
  error?: string;
  required?: boolean;
  hint?: string;
};

type InputProps = BaseProps &
  React.InputHTMLAttributes<HTMLInputElement> & { as?: "input" };

type TextareaProps = BaseProps &
  React.TextareaHTMLAttributes<HTMLTextAreaElement> & { as: "textarea" };

/**
 * Labeled form field (input or textarea) with an associated error message.
 * The label is always programmatically linked via htmlFor/id, and the
 * error is linked via aria-describedby + aria-invalid, so assistive tech
 * announces it — not just a red string next to the field.
 */
export default function Field(props: InputProps | TextareaProps) {
  const { label, error, required, hint, id: idProp, ...rest } = props;
  const generatedId = useId();
  const id = idProp ?? generatedId;
  const errorId = `${id}-error`;
  const hintId = `${id}-hint`;
  const describedBy = [hint && hintId, error && errorId].filter(Boolean).join(" ") || undefined;

  const sharedClasses =
    "w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-foreground placeholder:text-muted-foreground focus-visible:outline-2 focus-visible:outline-offset-2";

  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-foreground">
        {label}
        {required && <span aria-hidden="true" className="text-accent"> *</span>}
      </label>
      {hint && (
        <p id={hintId} className="mb-1.5 text-xs text-muted-foreground">
          {hint}
        </p>
      )}
      {props.as === "textarea" ? (
        <textarea
          id={id}
          required={required}
          aria-required={required}
          aria-invalid={Boolean(error)}
          aria-describedby={describedBy}
          className={`${sharedClasses} min-h-32 resize-y`}
          {...(rest as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : (
        <input
          id={id}
          required={required}
          aria-required={required}
          aria-invalid={Boolean(error)}
          aria-describedby={describedBy}
          className={sharedClasses}
          {...(rest as React.InputHTMLAttributes<HTMLInputElement>)}
        />
      )}
      {error && (
        <p id={errorId} role="alert" className="mt-1.5 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
