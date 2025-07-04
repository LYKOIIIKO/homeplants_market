import { NumberField } from "@base-ui-components/react/number-field"
import AddIcon from "@mui/icons-material/Add"
import RemoveIcon from "@mui/icons-material/Remove"
import { observer } from "mobx-react-lite"
import { useId } from "react"
import cartStore from "../../../../../../store/cartStore"
import styles from "./ProductCounter.module.css"

function ProductCounter({ itemId, count, setCount }) {
	const id = useId()

	const handlerIncrementCount = (id) => {
		if (!cartStore.getItemStatus(id)) {
			setCount(count + 1)
		} else {
			cartStore.incrementItemCount(id)
			setCount(count + 1)
		}
	}

	const handlerDecrementCount = (id) => {
		if (!cartStore.getItemStatus(id)) {
			setCount(count - 1)
		} else {
			cartStore.decrementItemCount(id)
			setCount(count - 1)
		}
	}

	return (
		<>
			<NumberField.Root
				id={id}
				defaultValue={1}
				value={count}
				min={1}
				max={99}
				className={styles.Field}
			>
				<NumberField.Group className={styles.Group}>
					<NumberField.Decrement
						className={styles.Decrement}
						onClick={() => handlerDecrementCount(itemId)}
					>
						<RemoveIcon fontSize="small" />
					</NumberField.Decrement>
					<NumberField.Input className={styles.Input} />
					<NumberField.Increment
						className={styles.Increment}
						onClick={() => handlerIncrementCount(itemId)}
					>
						<AddIcon fontSize="small" />
					</NumberField.Increment>
				</NumberField.Group>
			</NumberField.Root>
		</>
	)
}

export default observer(ProductCounter)
