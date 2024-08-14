import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Select,
  SelectItem,
} from "@nextui-org/react";

export const ReservaTuClase = (props) => {
  const { isOpen, onOpenChange } = props;

  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="3xl">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex justify-center">
                Reserva tu clase
              </ModalHeader>
              <ModalBody>
                <div>
                  <div className="flex gap-2">
                    <Input
                      type="text"
                      variant="bordered"
                      label="Nombre/s"
                      name="nombre"
                    />
                    <Input
                      type="text"
                      variant="bordered"
                      label="Apellidos"
                      name="apellidos"
                    />
                  </div>
                  <div className="flex gap-2 mt-5">
                    <Input
                      name="correo"
                      className="flex-grow"
                      type="email"
                      variant="bordered"
                      label="Correo electronico"
                    />
                    <Input
                      name="telefono"
                      type="number"
                      variant="bordered"
                      label="Telefono"
                      maxLength={10}
                      pattern="[0-9]*"
                      inputMode="numeric"
                      className="w-3/6"
                    />
                  </div>
                  <div className="mt-5">
                    <Select
                      variant="bordered"
                      label="Selecciona tu clase"
                      className="w-full"
                    >
                      <SelectItem key="clase">clase</SelectItem>
                    </Select>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" variant="ghost" onPress={onClose}>
                  Enviar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
