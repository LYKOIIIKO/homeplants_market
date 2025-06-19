import { NumberField } from "@base-ui-components/react/number-field";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import * as React from "react";
import styles from "./CartCounter.module.css";

export default function CartCounter() {
	const id = React.useId();
	return (
		<NumberField.Root
			id={id}
			defaultValue={1}
			min={1}
			max={99}
			className={styles.Field}
		>
			<NumberField.Group className={styles.Group}>
				<NumberField.Decrement className={styles.Decrement}>
					<RemoveIcon fontSize="small" />
				</NumberField.Decrement>
				<NumberField.Input className={styles.Input} />
				<NumberField.Increment className={styles.Increment}>
					<AddIcon fontSize="small" />
				</NumberField.Increment>
			</NumberField.Group>
		</NumberField.Root>
	);
}
